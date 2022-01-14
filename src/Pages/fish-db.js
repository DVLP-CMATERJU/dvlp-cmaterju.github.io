import React from 'react';
import Layout from "../Components/layout";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

const DATA = [
    {
        title : 'Catla', 
        imgs : [
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Catla/1.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Catla/2.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Catla/3.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Catla/4.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Catla/5.jpg'
        ]
    }, 
    {
        title : 'Mrigal', 
        imgs : [
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Mrigal/1.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Mrigal/2.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Mrigal/3.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Mrigal/4.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Mrigal/5.jpg'
        ]
    },
    {
        title : 'Rohu', 
        imgs : [
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Rohu/1.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Rohu/2.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Rohu/3.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Rohu/4.jpg',
            'https://raw.githubusercontent.com/DVLP-CMATERJU/Datasets/master/JUDVLP-WBUAFS_Fishdb-IMC.v1/Rohu/5.jpg'
        ]
    },

]

// < Link to = "/files/myfile.pdf" target = "_blank" download> Download</Link >


const DatasetCard = ({ props }) => {
    return (
        <div className="container">
            <h4>{props.title}</h4>
            
            <div className="mt-3 pa-2">
                <div className="flex flex-wrap">
                    {
                        props.imgs.map( e => 
                            <div className="shadow-4 mw6 br3 hidden ba b--black-10 mv4 mh2">
                                <img src={e} className="mw-100"></img>
                            </div>
                        )
                    }
                </div>
            </div>
            

        </div>
    )
}



const FishDb = (props) => {

    return (
        <Layout >
            <div className="jumbotron jumbotron-fluid backgroundP">
                <div className="container">
                    <header className="tc pv2 pv2-ns">
                        <h1 className="display-3 rcolor fw4">JUDVLP-WBUAFS: Fishdb-IMC.v1</h1>
                    </header>
                    <div class="container">
                        <h2 class="f3 gray  ttu tracked rcolor">Dataset details</h2>
                        <a href="https://github.com/DVLP-CMATERJU/Datasets/tree/master/JUDVLP-WBUAFS_Fishdb-IMC.v1" class="lead pb0">Github link</a>
                        <p class="f5 pv0">Num images : 1500 consisting of three popular major carp fish species: Labeo catla (Catla), Labeo rohita (Rohu), and Cirrhinus cirrhosus (Mrigal)</p>                        
                    </div>
                    <div className="container">
                        <h2 class="f3 gray  ttu tracked rcolor">Dataset sample images</h2>   
                    </div>
                    {/* <div className="container"> */}
                    <div className="flex flex-column">
                        {
                            DATA.map(e => <DatasetCard props={e} />)
                        }
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </Layout>
    )
}

export default FishDb;