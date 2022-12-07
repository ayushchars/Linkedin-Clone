import React from 'react'
import "./Widget.css"
import Infoicon from "@material-ui/icons/Info"
import FiberManualRecord from "@material-ui/icons/FiberManualRecord"
function Wiget() {
    const newsArticle =(heading, subtitle)=>{
    
    return(

        <div className='widgets_articles'>
            <div className='article_left'>
                <FiberManualRecord/>
            </div>
            <div className='article_right'>
                <h4>
                   {heading} 
                </h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    };

  return (
    <div className='widget'>
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <Infoicon/>
        </div>
        {newsArticle("Ayush chaurasia's Clone made it", "Top News 5000 reads")}
        {newsArticle("Virat will score century in asia cup", "Top News 5000 reads")}
        {newsArticle("India won gold", "Top News 5000 reads")}
        {newsArticle("Tesla will bankruptcy", "Top News 5000 reads")}
    </div>
    )

}

export default Wiget