<template>
  <v-container class="inscrire" grid-list-xs >
    <v-row>
      <v-col align="center">
        <h1 class="h"><v-icon color="indigo lighten-3" class="mr-2"></v-icon>Contact</h1>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <section class="site-section" id="contact-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="text-black h1 site-section-heading" style="font-size: 33px;">N’hésitez pas à nous contacter</h2>
            <h2 class="text-black h1 site-section-heading" style="font-size: 28px;">C'est toujours un plaisir de pouvoir discuter de vos projets à venir !</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 mb-5">



            <form method="POST" action="email.php" class="p-5 bg-white">


              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">Nom</label>
                  <input type="text" name="fname" id="fname" class="form-control">
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">Prénom</label>
                  <input type="text" name="lname" id="lname" class="form-control">
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label>
                  <input type="email" name="email" id="email" class="form-control">
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-black" for="subject">Objet</label>
                  <input type="subject" name="subject" id="subject" class="form-control">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Votre Message"></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" name="submit" value="Envoyer Message" style="background-color: #82CF1F;" class="btn btn-md text-white">
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-5">

            <div class="p-4 mb-3 bg-white">
              <p class="mb-0 font-weight-bold">Adresse</p>
              <p class="mb-4"> 31 rue du fragnes 38920 Crolles</p>

              <p class="mb-0 font-weight-bold">Fixe</p>
              <p class="mb-4"><a style="color: #82CF1F;" href="tel:+06">06...</a>
              </p>

              <p class="mb-0 font-weight-bold">Email</p>
              <p class="mb-0"><a style="color: #82CF1F;" href="cmonmail@là.fr">cmonmail@là.fr</a></p>

            </div>

          </div>
        </div>
      </div>
    </section>
  </v-container>
</template>
<script>
export default {

}
</script>
<style>
.inscrire{
  margin-bottom:120px
}
.btn{
  background-color: rgb(230,158,64) !important;
}
.form-control {
  border-radius: 30px;
}
</style>