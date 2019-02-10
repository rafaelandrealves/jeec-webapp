<template>
    <div class="component-title">
        <div class="section-header">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'component-title',
<<<<<<< HEAD
        props: ['title', 'subtitle']
=======
        props: {
            title: {
                type: String
            },
            subtitle: {
                type: String
            },
            font_color: {
                default: "default",
                type: String
            },
            size: {
                default: "36px",
                type: String
            }
        }
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
    }
</script>

<style>
.component-title {
<<<<<<< HEAD
    padding-bottom: 20px;
=======
    padding-bottom: 10px;
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
}

.section-header {
  position: relative;
  padding-bottom: 10px;
}

.section-header h2 {
<<<<<<< HEAD
=======
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-header p {
<<<<<<< HEAD
=======
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
>>>>>>> 52f4dde3dea4768a72d2b9f61092491e7c0ee79d
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-family: 'Karla';
  font-weight: 500;
  color: #9195a2;
}

.section-header::before {
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  height: 2px;
  background: #4089ff;
  bottom: 0;
  left: calc(50% - 50px);
}

@media screen and (max-width: 700px) {
    .section-header h2 {
        font-size: 30px;
    }
}
</style>

