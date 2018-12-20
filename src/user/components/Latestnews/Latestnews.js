import React from "react"; 

class Latestnews extends React.Component {
  render(){
    return (

      <section className="news_list light_area section_padding_100_100">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="section_heading_title">latest News</h2>
            <div className="describe_section_title">
              <p>
                You can checking out our latest news every days<br/>
                  We update our proposals and news.
					    </p>
				</div>
			</div>
                
			<div className="owl-carousel latest_news_carousel sv_dots_nav">

                  <div className="item">
					<h5 className="new_name"><a href="single-news.html">Good Weather</a></h5>
                    <div className="new_date"><i className="far fa-calendar-alt"></i> 27 APR, 2018</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. In risus magna, porta sit amet
						orci ultrices, condimentum <a href="single-news.html" className="reed_more"><i className="far fa-hand-pointer"></i>Read More...</a>
                    </p>
				</div>

                  <div className="item">
					<h5 className="new_name"><a href="single-news.html">Special Program</a></h5>
                    <div className="new_date"><i className="far fa-calendar-alt"></i> 12 APR, 2018</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. In risus magna, porta sit amet
						orci ultrices, condimentum <a href="single-news.html" className="reed_more"><i className="far fa-hand-pointer"></i>Read More...</a>
                    </p>
				</div>

                  <div className="item">
					<h5 className="new_name"><a href="single-news.html">New Cycling Roads</a></h5>
                    <div className="new_date"><i className="far fa-calendar-alt"></i> 03 APR, 2018</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. In risus magna, porta sit amet
						orci ultrices, condimentum <a href="single-news.html" className="reed_more"><i className="far fa-hand-pointer"></i>Read More...</a>
                    </p>
				</div>

               

                
                </div>
                </div>
                </section>
                

    );

  }
}
export default Latestnews;



