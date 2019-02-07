import React, { Component } from "react";
import PropTypes from "prop-types";
import DraftList from '../../components/List'

class List extends Component {

  render() {
    const { title, draftList } = this.props;
    return (
      <form>
        <h1>{title}</h1>

        <DraftList items={draftList}/>
      </form>
    );
  }
}

List.propTypes = {
  title: PropTypes.string,
    draftList: PropTypes.array,
};
List.defaultProps = {
  title: "Список заявлений",
    draftList: [
        {title: 'Черновик 1',
            firstStatus: 'First status',
            secondStatus: 'Second status',
        },
        {title: 'Черновик 1',
            firstStatus: 'First status',
            secondStatus: 'Second status',
        },
    ]
};

export default List;
