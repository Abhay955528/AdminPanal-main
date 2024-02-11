import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const estiloApi = createApi({
  reducerPath: 'estiloApi',
  tagTypes: ["Banner", "Category", "Attribute", "Product", "Review", "Coupon"],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://estilo.phoneo.in/public/api/'
    // baseUrl:'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: 'Ban',
        method: "GET"
      }),
      providesTags: ["Banner"]

    }),
    getconpon: builder.query({
      query: () => ({
        url: 'Coupon',
        method: "GET"
      }),
      providesTags: ["Coupon"]

    }),
    getReview: builder.query({
      query: () => ({
        url: 'Rat',
        method: "GET"
      }),
      providesTags: ["Review"]
    }),
    getCategory: builder.query({
      query: () => ({
        url: 'Cat',
        method: "GET"
      }),
      providesTags: ["Category"]
    }),
    getProd: builder.query({
      query: () => ({
        url: 'Prod',
        method: "GET"
      }),
      providesTags: ["Product"],
    }),
    getAttribute: builder.query({
      query: () => ({
        url: 'Attr',
        method: "GET"
      }),
      providesTags: ["Attribute"],
    }),

    addProduct: builder.mutation({
      query: (body) => ({
        url: `Prod`,
        method: 'POST',
        formData: true,
        body: body
      }),
      invalidatesTags: ["Product"],
    }),
    addcoupon: builder.mutation({
      query: (body) => ({
        url: `Coupon`,
        method: 'POST',
        formData: true,
        body: body
      }),
      invalidatesTags: ["Coupon"],
    }),

    addReview: builder.mutation({
      query: (body) => ({
        url: `Rat`,
        method: 'POST',
        formData: true,
        body: body
      }),
      invalidatesTags: ["Review"],
    }),
    addAttribute: builder.mutation({
      query: (body) => ({
        url: `Attr`,
        method: 'POST',
        body
      }),
      invalidatesTags: ["Attribute"],
    }),
    addBanner: builder.mutation({
      query: (body) => ({
        url: 'Ban',
        method: "POST",
        formData: true,
        body: body,
      }),
      invalidatesTags: ["Banner"]
    }),
    addCategory: builder.mutation({
      query: (body) => ({
        url: 'Cat',
        method: "POST",

        body
      }),
      invalidatesTags: ["Category"]
    }),

    DeleteBanner: builder.mutation({
      query: (id) => ({
        url: `Ban/${id}`,
        method: "DELETE",

      }),
      invalidatesTags: ["Banner"]
    }),
    DeleteCoupon: builder.mutation({
      query: (id) => ({
        url: `Coupon/${id}`,
        method: "DELETE",

      }),
      invalidatesTags: ["Coupon"]
    }),

    UpdateBan: builder.mutation({
      query: ({ id, ...body }) => ({

        url: `Ban/${114}`,
        method: "PUT",

        body: body
      }),
      invalidatesTags: ["Banner"]
    }),
    UpdateCat: builder.mutation({
      query: (body) => {
        const data = {};
        let id;

        for (const [key, value] of body.entries()) {
          if (key === 'id') {
            id = value;
          } else {
            data[key] = value;
          }
        }
        console.log(body)
        return ({
          url: `Cat/${id}`,
          method: "PUT",

          body: data
        })
      },
      invalidatesTags: ["Category"]
    }),


    DeleteCategory: builder.mutation({
      query: (id) => ({
        url: `Cat/${id}`,
        method: "DELETE",
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // },
      }),
      invalidatesTags: ["Category"]
    }),
    UpdateAttribute: builder.mutation({
      query: (body) => {
        const data = {}; // Object for the remaining data
        let id; // Variable to store the "id" value

        for (const [key, value] of body.entries()) {
          if (key === 'id') {
            id = value;
          } else {
            data[key] = value;
          }
        }
        // console.log(body)
        return ({
          url: `Attr/${id}`,
          method: "PUT",
          body: data
        })
      },
      invalidatesTags: ["Attribute"]
    }),

    updateProd: builder.mutation({
      query: (body) => {
        const data = {};
        let id;

        for (const [key, value] of body.entries()) {
          if (key === 'id') {
            id = value;
          } else {
            data[key] = value;
          }
        }
        console.log(body)
        return ({
          url: `Prod/${id}`,
          method: "PUT",
          // formData:true,
          body: data
        })
      },
      invalidatesTags: ["Product"]
    }),
    DeleteProduct: builder.mutation({
      query: (id) => ({
        url: `Prod/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    deletAttribute: builder.mutation({
      query: (id) => ({
        url: `Attr/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Attribute"],
    }),


  })
})
export const {
  useGetProdQuery,
  useGetAttributeQuery,
  useGetProductsQuery,
  useGetCategoryQuery,
  useAddBannerMutation,
  useDeleteBannerMutation,
  useAddProductMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateBanMutation,
  useUpdateCatMutation,
  useGetReviewQuery,
  useAddReviewMutation,
  useGetconponQuery,
  useAddcouponMutation,
  useDeleteCouponMutation,



  //  useGetProdQuery,
  //  useGetAttributeQuery,
  // useGetProductsQuery,
  //  useAddBannerMutation,
  //  useDeleteBannerMutation,
  //  useAddProductMutation,
  useDeleteProductMutation,

  // useUpdateProductMutation,
  useAddAttributeMutation,
  useDeletAttributeMutation,
  useUpdateAttributeMutation,
  useUpdateProdMutation } = estiloApi