import React from 'react';
import Layout from "../Components/layout";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

const DATA = [
    {
        title : 'Benign', 
        imgs : [
            'https://github.com/DVLP-CMATERJU/JUCYT_V1/raw/main/Image/40x/RGB/Benign/B10A.jpg',
            'https://github.com/DVLP-CMATERJU/JUCYT_V1/raw/main/Image/40x/RGB/Benign/B11.jpg',
            'https://github.com/DVLP-CMATERJU/JUCYT_V1/raw/main/Image/40x/RGB/Benign/B11A.jpg'
        ]
    }, 
    {
        title : 'Malignant', 
        imgs : [
            'https://github.com/DVLP-CMATERJU/JUCYT_V1/raw/main/Image/40x/RGB/Malignant/M52B.jpg',
            'https://github.com/DVLP-CMATERJU/JUCYT_V1/raw/main/Image/40x/RGB/Malignant/M52C.jpg',
            'https://github.com/DVLP-CMATERJU/JUCYT_V1/raw/main/Image/40x/RGB/Malignant/M52D.jpg'     
         ]
    }

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



const JuCyt = (props) => {

    return (
        <Layout >
            <div className="jumbotron jumbotron-fluid backgroundP">
                <div className="container">
                    <header className="tc pv2 pv2-ns">
                        <h1 className="display-3 rcolor fw4">JUCYT_V1 Cytology Dataset</h1>
                    </header>
                    <div class="container">
                        <h2 class="f3 gray  ttu tracked rcolor">Dataset details</h2>
                        <a href="https://github.com/DVLP-CMATERJU/JUCYT_V1" class="lead pb0">Github link</a>
                        <p class="f5 pv0">Num images : 1253 cytology images, captured in different magnifications-4X, 10X, and 40X</p>                        
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

export default JuCyt;