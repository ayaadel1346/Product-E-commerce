import { CategoryData } from './../utils/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from '../utils/axios';


export const useHomeStore = defineStore('home', () => {
    
  const homeData = ref({
    header: {
      desc: "",
      img: "",
      video: "",
      btn_text: "",
      btn_link: ""
    },
    about: {
      title: "",
      desc: "",
      img: "",
      values: [
       {
         id:0 ,
        title:""
       }
      ]
    },
    brands: [
       { id: 0,
    title: '',
    desc: '',
    img: '',
    categories:[]}
    ],
    contact: {
      advertisement: ""
    },
    footer: {
      logo: "",
      phone: "",
      email: "",
      socials: {
        facebook: "",
        twitter: "",
        instagram: "",
        snapchat: ""
      }
    }
  });



  const categoryData=ref<CategoryData>({
    id:0,
    name:'',
    img:''
  })

  const loaderHome = ref(true);
  const categoryLoader=ref(true);



  const fetchData = async () => {  
    try {
      const responseData = await axios.get('/testing');
      homeData.value = responseData.data.data;
      loaderHome.value = false;
    } catch (err) {
      loaderHome.value = true;
    }
  };

  const fetchCategoryData = async (id:number) => {  
    try {
      const responseData = await axios.get(`/categories/${id}/products`);
      categoryData.value = responseData.data.data;
      categoryLoader.value = false;
    } catch (err) {
        categoryLoader.value = true;
    }
  };

  return { fetchData, homeData, loaderHome ,fetchCategoryData,categoryLoader,categoryData};
});

     
     
     

  