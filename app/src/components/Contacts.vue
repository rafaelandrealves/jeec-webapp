<template>
    <div class="contacts-comp">
        <component-title title="Contact Us" subtitle=""/>

       <section id="contact" class="section-bg wow fadeInUp">
            <div class="container">
                <div class="row contact-info">
                <div class="col-md-4">
                    <div class="contact-address">
                    <h3>Address</h3>
                    <address>Instituto Superior Técnico - Av. Rovisco Pais, 1049-001 Lisbon</address>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="contact-email">
                    <i class="ion-ios-email-outline"></i>
                    <h3>Email</h3>
<<<<<<< HEAD
                    <p><a href="mailto:info@example.com">contacto@jeec.ist</a></p>
=======
                    <p><a href="mailto:contacto@jeec.ist">contacto@jeec.ist</a></p>
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
                    </div>
                </div>

                </div>
            </div>
        </section>

        <div class="flexbox-imgs">
            <img href="http://www.vtxrm.com/" src="../../static/vtxrm.png">
            <img href="https://www.santandertotta.pt/pt_PT/Particulares/Universitarios.html" src="../../static/santander_logo.png">
            <img href="https://tecnico.ulisboa.pt/pt/" src="../../static/ist_logo.png">

            <a href="https://neecist.org/" target="_blank"><img src="../../static/neec_logo.png"></a>
            <img href="https://fenix.tecnico.ulisboa.pt/departamentos/deec" src="../../static/deec_logo.png">
        </div>

        <div class="bottom-bar">
            <div id="copyright">
<<<<<<< HEAD
                Copyright © 2018 - Jornadas de Engenharia Eletrotécnica e de Computadores do Instituto Superior Técnico
=======
                Copyright © 2019 - Jornadas de Engenharia Eletrotécnica e de Computadores do Instituto Superior Técnico
            </div>
            <div id="source-code">
                Code hosted on <a href="https://github.com/NEECIST/jeec19-webapp" target="_blank">Github</a>
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'contacts',
    }
</script>

<style>
.contacts-comp {
    position: relative;
    padding-top: 10px;
    background-color: #ffffff;
    text-align: left;
}

.bottom-bar {
<<<<<<< HEAD
  margin-top: 25px;
  width: 100%;
  height: 30px;
  background-color: rgb(91, 170, 223);
  color: white;
=======
  margin-top: 10px;
  width: 100%;
  height: 30px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
  position: relative;
  overflow: hidden;
  text-align: left;
  bottom: 0;
}

#copyright {
<<<<<<< HEAD
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  margin-top: 9px;
  margin-left: 20px;
}

@media screen and (max-width: 900px){
    .contact-location {
        color: black;
        font-size: 15px;
        line-height: 10px;
        font-family: "Roboto";
        padding-left: 30px;
    }

  .sponsor-icon {
    position: relative;
    width: 90px;
    height: 30px;
  }

  .sponsors-flex {
      flex-wrap: wrap;
      padding-top: 50px;
      padding-left: 10px;
      padding-right: 10px;
  }
=======
  padding-left: 10px;
  padding-bottom: 5px;
  padding-top: 9px;
  font-size: 13px;
  float: left;
  font-family: 'Lato', sans-serif;
}

#source-code {
  float: right;
  font-family: 'Lato', sans-serif;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 9px;
  font-size: 13px;
}

address {
    font-style: normal;
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
}

.flexbox-imgs {
  display: -webkit-box;  /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /*Firefox, Chrome, Opera */
  
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
<<<<<<< HEAD
    margin-top: 50px;
=======
    margin-top: 20px;
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
}
.flexbox-imgs img {
      justify-content: center;
    max-height: 100px;
    max-width: 150px;
    margin: 5px 12px;
    padding-left: 30px;
    opacity: .85;
    transition: all .3s;
 
}
.flexbox-imgs img:hover {
	opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
}

@media screen and (max-width: 800px) {
    .flexbox-imgs img {
      max-width: 125px;
      max-height: 88px;
      margin: 5px 8px;
      padding-left: 10px;
  }
}

@media screen and (max-width: 560px) {
  .flexbox-imgs img {
      max-width: 85px;
      max-height: 60px;
      margin: 3px 5px;
  }
<<<<<<< HEAD
=======

  .copyright {
      text-align: center;
      font-size: 8px;
      width: 80%;
      padding-left: 0px;
      padding-bottom: 0px;
  }

  .source-code {
      text-align: center;
  }

  .bottom-bar {
      text-align: center;
      height: 50px;
  }
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
}

.section-with-bg {
  background-color: #f6f7fd;
}

#contact .contact-info {
<<<<<<< HEAD
  margin-bottom: 20px;
=======
  margin-bottom: 10px;
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
  text-align: center;
}

#contact .contact-info i {
  font-size: 48px;
  display: inline-block;
  margin-bottom: 10px;
  color: #f82249;
}

.col-md-4 {
    width: 30%;
    display: inline-block;
}

#contact .contact-info address,
#contact .contact-info p {
  margin-bottom: 0;
  color: #112363;
}

#contact .contact-info h3 {
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #112363;
}

#contact .contact-info a {
  color: #4869df;
}

#contact .contact-info a:hover {
  color: #f82249;
}

#contact .contact-address,
#contact .contact-phone,
#contact .contact-email {
  font-size: 18px;
<<<<<<< HEAD
  margin-bottom: 20px;
=======
  margin-bottom: 10px;
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
}

@media screen and (max-width: 560px) {
  .col-md-4 {
      width: 80%;
  }
}

</style>