import PropTypes from 'prop-types';

const SearchBar = ({setSearchQuery}) =>{
    return <>
    <input type="text" placeholder="search Here " onChange={(e)=>setSearchQuery(e.target.value)}></input>
    </>
}

SearchBar.propTypes = {
    setSearchQuery: PropTypes.func.isRequired,
};
export default SearchBar;