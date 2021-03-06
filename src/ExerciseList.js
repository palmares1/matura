import React from 'react';
import { Button } from 'reactstrap';

import ReactTable from "react-table";
import "react-table/react-table.css";

import checkboxHOC from "react-table/lib/hoc/selectTable";

import { Link } from 'react-router-dom';

const CheckboxTable = checkboxHOC(ReactTable);

function getData() {
  const data = [
    {
      _id: 2,
      name: 'Lekcja 2',
    }, {
      _id: 4,
      name: 'Lekcja 4',
    }, {
      _id: 7,
      name: 'Lekcja 7',
    },
  ]
  return data;
}

function getColumns() {
  const columns = [
    {
      Header: 'Nazwa',
      accessor: 'name',
      Cell: ({ row }) => (<Link to={`Exercise-${row._original._id}`}>{row.name}</Link>)
    },
  ]
  return columns;
}

class ExerciseList extends React.Component {
  constructor() {
    super();
    const data = getData();
    const columns = getColumns(data);
    this.state = {
      data,
      columns,
      selection: [],
      selectAll: false
    };
  }

  toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });
  };

  toggleAll = () => {
    /*
      'toggleAll' is a tricky concept with any filterable table
      do you just select ALL the records that are in your data?
      OR
      do you only select ALL the records that are in the current filtered data?
      
      The latter makes more sense because 'selection' is a visual thing for the user.
      This is especially true if you are going to implement a set of external functions
      that act on the selected information (you would not want to DELETE the wrong thing!).
      
      So, to that end, access to the internals of ReactTable are required to get what is
      currently visible in the table (either on the current page or any other page).
      
      The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
      ReactTable and then get the internal state and the 'sortedData'. 
      That can then be iterrated to get all the currently visible records and set
      the selection state.
    */
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach(item => {
        selection.push(item._original._id);
      });
    }
    this.setState({ selectAll, selection });
  };

  isSelected = key => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  };

  logSelection = () => {
    console.log("selection:", this.state.selection);
  };

  render() {
    const { toggleSelection, toggleAll, isSelected} = this;
    const { data, columns, selectAll } = this.state;

    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: "checkbox",
      getTrProps: (s, r) => {
        // someone asked for an example of a background color change
        // here it is...
        const selected = r === undefined ? false : this.isSelected(r.original._id);
        return {
          style: {
            backgroundColor: selected ? "lightgreen" : "inherit"
            // color: selected ? 'white' : 'inherit',
          }
        };
      }
    };

    return (
      <div className="">
        <div className="here">
          <h4>Lekcje</h4>
          <div className="container text-center">
            <Button color="success">Nowy</Button>{' '}
            <Button color="secondary">Ukryj</Button>{' '}
            <Button color="danger">Usuń</Button>{' '}
            {/* <button onClick={logSelection}>Log Selection</button> */}
          </div>
        </div>
        <div className="container">
        <CheckboxTable
          ref={r => (this.checkboxTable = r)}
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          filterable
          {...checkboxProps}
        />
      </div>
      </div>
    );
  }
}

export default ExerciseList;
