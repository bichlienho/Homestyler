import React from "react";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide">





        <div className="carousel-inner" style={{ width: '100%', height: '700px' }}>
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <img
              src="/assets/images/logo/banner3.jpg"
              className="d-block w-100"
              alt="Banner 1"
              style={{ height: '100%', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 transition-all">
                <h4 className="text-light text-uppercase font-weight-medium mb-3">Blog</h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4 hover-zoom">Review</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row px-xl-5 pb-3">


        <div class="section">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <img style={{ width: '100%', height: '380px' }} src="/assets/images/logo/111.jpg" alt="logo" />

              </div >

              <div class="col-2">


              </div >
              <div class="col-4">
                <p>
                  <h2>1.Kitchen Overview</h2><h2><i className="far fa-heart" style={{ color: 'red' }}>100</i>
                  <br /></h2>
                  <h5 style={{ textAlign: 'justify' }}>Design style always plays an important role,deciding whether your kitchen space is beautiful or not.Each style will bring a different look to the kitchen. Therefore,prioritize choosing the design style that best suits the overall look of the house.<br />
                    With the main background being brown,it will enhance the warm kitchen space.Helps the feeling of standing in the kitchen become more secure and safe.The chairs are placed facing each other,making the room space more neat and airy
                  </h5>



                </p>

              </div >








            </div>
          </div>
          <div class="container">


            <div class="row">
              <div class="col-4" style={{ marginTop: '60px' }}>

                <p>
                  <h2>2.Overview of the bedroom </h2><h2><i className="far fa-heart" style={{ color: 'red' }}>100</i>
                  <br /></h2>
                  <h5 style={{ textAlign: 'justify' }}>Create a modern style bedroom now:
Minimalism,comfort and generosity are characteristics of modern style.However,many homeowners misunderstand that this style is only applicable when the bedroom has a small space.Not like that!If the apartment is designed in a modern style,it can take full advantage of the strong,bold features and unique outstanding shapes.This design trend is increasingly growing and popular today.Thanks to the hands of talented architects,homeowners can adjust to suit their lifestyle and dream space.
                  </h5>




                </p><br /><br />


              </div ><br /><br />
              <div class="col-2">


              </div >
              <div class="col-6" style={{ marginTop: '50px' }}>
                <img style={{ width: '100%', height: '380px' }} src="/assets/images/logo/bed.jpg" alt="logo" />

              </div >



              {/* 3 */}
              <div class="row">
                <div class="col-6" style={{ marginTop: '5px' }}>
                  <img style={{ width: '100%', height: '450px' }} src="/assets/images/logo/Tam.jpg" alt="logo" />

                </div >

                <div class="col-2">


                </div >
                <div class="col-4" style={{ marginTop: '5px' }}>
                  <p>
                    <h2>3.Overview of the bathroom</h2><h2><i className="far fa-heart" style={{ color: 'red' }}>100</i>
                    <br />  </h2>
                    <h5 style={{ textAlign: 'justify' }}>The design needs to ensure the criteria of safety, convenience, hygiene and aesthetics. The types of sanitary equipment in the bathroom need to be carefully selected and considered carefully before purchasing. You should buy from reputable suppliers to ensure quality and the best warranty:<br />



                 

                      - Bathroom furniture should be cleaned,replaced and tidied regularly.<br />

                      - Decorate the bathroom space with colorful and fragrant decorations. <br />
                    </h5>



                  </p>

                </div >


                {/* 4 */}
                <div class="col-4" style={{ marginTop: '70px' }}>
                  <p>
                    <h2>4.Overview of the living room </h2> <h2><i className="far fa-heart" style={{ color: 'red' }}>100</i>
                    <br />  </h2>
                    <h5 style={{ textAlign: 'justify' }} >The living room is considered the most important area in a house,the center of that house,the place that people will see first when entering the homeowner's private space.Therefore,the living room interior design is always given special attention.</h5>





                  </p><br />
</div ><br /><br />

                <div class="col-2">
                </div >

                <div class="col-6" style={{ marginTop: '60px' }}>
                  <img style={{ width: '100%', height: '450px' }} src="/assets/images/logo/khach.jpg" alt="logo" />

                </div >


              </div>



            </div>
          </div>
        </div>
      </div >




    </div>


  );
}

export default Blog;