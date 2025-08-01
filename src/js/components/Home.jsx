import React from 'react'
import Header from './Header';
import Actions from './Actions';


//create your first component
const Home = () => {
	// let Audioplayer = () =>{
    return (<div className="container">
        <div className ="content"> 
        <Header />
        <Actions />
        {/* <Playlist />  */}
    </div>
    {/* <Navigate/> */}
    </div>
    );
}
	

export default Home;