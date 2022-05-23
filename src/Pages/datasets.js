import React from 'react';
import Layout from "../Components/layout";
import { HashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";

const DATA = [
    {
        id: "Fishdb-IMC",
        title : "JUDVLP-WBUAFS: Fishdb-IMC.v1",
        description: "JUDVLP-WBUAFS: Fishdb-IMC.v1 Indian Major Carp Fish Species Databases are primarily collected by West Bengal Fisheries Science consists of 1500 images of three popular major carp fish species: Labeo catla (Catla), Labeo rohita (Rohu), and Cirrhinus cirrhosus (Mrigal) and processed and annotated at Jadavpur University, DVLP lab, under Center for microprocessor Application and Training and Research (CMATER). A total of 500 images are present in each fish species. The images are taken from the Garia fish market and Mukundapur fish market situated in Kolkata, India. The databases are available for research purposes according to the conditions of use which are described below.\
In case you want to get the full dataset, please send the signed and scanned copy of the below application form to nibaran.das@jadavpuruniversity.ac.in.",
        download_link : false,
        application_link : true,
        app_path: "/files/Dataset Application Form.docx",
        img_link: '/imgs/fishdb.jpg',
        link : '/#/datasets/fishdb'
    },
    {
        id: "JUCYT_V1",
        title : "JUCYT_V1 Cytology Dataset",
        description: "JUCYT_V1 is a cytology image database, which contains 1253 cytology images, captured in different magnifications-4X, 10X, and 40X. These cytology images are captured by a 10 MP CMOS Camera, which is attached to the trinocular microscope. 664 Benign samples, 589 Malignant samples. Here we have given only 6 cytology images(3 Benign samples, 3 Malignant samples) in 40x magnification along with proper labeling as an example. The complete dataset will be uploaded soon.",
        download_link : false,
        application_link : false,
        app_path: "/files/Dataset Application Form.docx",
        img_link: '/imgs/B10A.jpg',
        link : '/#/datasets/jucyt'
    },
    
]

    // < Link to = "/files/myfile.pdf" target = "_blank" download> Download</Link >


const DatasetCard = ({props}) => {
    return (
        <article id={props.id} className="grow shadow-4  mw6 br3 hidden ba b--black-10 mv4 mh2">
            
                <img src={props.img_link} className="db w-100 br2 br--top" alt="Photo of dataset image"></img>
            <a href={props.link} className="db no-underline black-90" >
                <h1 className="f4 bg-near-white br3 br--top black-90 mv0 pv2 ph3">{props.title}</h1>
            </a>
            <div className="pa3 bt b--black-10">
                <p className="f6 f5-ns lh-copy measure">
                    {props.description}
                </p>                
            </div>
            {
                props.application_link ? 
                    <div className="pa3 bt b--black-10"> 
                        < Link to = {props.app_path} target = "_blank" download>Download application form to request the dataset</Link >
                    </div> : <div></div>
            }
            
        </article>
    )
}



const Datasets = (props) => {

    return (
        <Layout >
            <div className="jumbotron jumbotron-fluid backgroundP">                
                <div className="container">
                    <header className="tc pv2 pv2-ns">
                        <h1 className="display-3 rcolor fw4">Datasets</h1>
                    </header>
                    {/* <div className="container"> */}
                        <div className="flex flex-wrap">
                            {
                                DATA.map( e => <DatasetCard props={e}/>)
                            }
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </Layout>
    )   
}

export default Datasets;