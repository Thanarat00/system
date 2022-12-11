import { AiOutlineSearch } from "react-icons/ai";
import '../App.css'
import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
        <div class="search">
            <input type="text" class="searchTerm" placeholder="ค้นหา" ></input>
        <button type="submit" class="searchButton">
            <AiOutlineSearch />
       </button>
     </div>
    )
  }
}