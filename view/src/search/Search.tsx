import * as React from 'react';
import {connect} from "react-redux";

interface SearchProps {
    keyword: string;
}

class Search extends React.Component<SearchProps, {}> {
    public render() {
        return (
            <div className='searchForm'/>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        keyword: state.rootReducer.search.searchKeyWord
    }
};

export default connect(mapStateToProps, null)(Search);