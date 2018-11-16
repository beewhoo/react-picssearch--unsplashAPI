import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{


  async onSearchSubmit(term){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query:term},
        headers:{
          Authorization: 'Client-ID ad1206ddccc0bd09011ff8e4b369437bfbbe1d0d42834beb13d9ea3f7736adb6'
        }

      });

      console.log(response.data.results)

  }



  render(){
    return (
      <div className='ui container' style={{marginTop: '15px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }

}

export default App;
