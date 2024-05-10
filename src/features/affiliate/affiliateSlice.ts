import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "app/store";

export interface UserResponse {
  //results: Account;
  affiliate: {
    _id?: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    category: string;
    notes: string;
    fleetNumber: string;
    enquiryDate: string;
    coverageDistance: string;
    coverageArea: string;
    years_experience: string;
    website: string;
    service_date: string;
    statusAffiliate?: string;
    account_name: string;
    sort_code: string;
    account_number: string;
    bank_name: string;
    login: string;
    password: string;
    api_token: string;
    vehicles: string[];
    progress: string;

    insurance_date: string;
    insurance_number: string;
    insuranceFileBase64String: string;
    InsuranceFileExtension: string;
    insurance_file: string;

    id_creation_date: string;
    number_file: string;
    id_file: string;
    IdFileExtension: string;
    IdFileBase64String: string;
    priceJob: string;
    noteAcceptJob: string;
    statusJob: string;
  };
}
export interface Affiliate {
  accessToken: string;
  affiliate: {
    _id?: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    category: string;
    notes: string;
    fleetNumber: string;
    enquiryDate: string;
    coverageDistance: string;
    coverageArea: string;
    years_experience: string;
    website: string;
    service_date: string;
    statusAffiliate?: string;
    account_name: string;
    sort_code: string;
    account_number: string;
    bank_name: string;
    login: string;
    password: string;
    api_token: string;
    vehicles: string[];
    progress: string;

    insurance_date: string;
    insurance_number: string;
    insuranceFileBase64String: string;
    InsuranceFileExtension: string;
    insurance_file: string;

    id_creation_date: string;
    number_file: string;
    id_file: string;
    IdFileExtension: string;
    IdFileBase64String: string;
    priceJob: string;
    noteAcceptJob: string;
    statusJob: string;
  };
}

export interface AffiliateAccount {
  _id?: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  category: string;
  notes: string;
  fleetNumber: string;
  enquiryDate: string;
  coverageDistance: string;
  coverageArea: string;
  years_experience: string;
  website: string;
  service_date: string;
  statusAffiliate?: string;
  account_name: string;
  sort_code: string;
  account_number: string;
  bank_name: string;
  login: string;
  password: string;
  api_token: string;
  vehicles: string[];
  progress: string;

  insurance_date: string;
  insurance_number: string;
  insuranceFileBase64String: string;
  InsuranceFileExtension: string;
  insurance_file: string;

  id_creation_date: string;
  number_file: string;
  id_file: string;
  IdFileExtension: string;
  IdFileBase64String: string;
  priceJob: string;
  noteAcceptJob: string;
  statusJob: string;
}

export interface LoginRequest {
  login: string;
  password: string;
}

export const affiliateSlice = createApi({
  reducerPath: "affiliate",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/affiliate/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).authAffiliate?.affiliate
        .api_token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Affiliate", "AffiliateAccount"],
  endpoints(builder) {
    return {
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (credentials) => ({
          url: "/loginAffiliate",
          method: "POST",
          body: credentials,
        }),
      }),
      updateAffiliate: builder.mutation<void, AffiliateAccount>({
        query: ({ _id, ...rest }) => ({
          url: `updateAffiliate/${_id}`,
          method: "PUT",
          body: rest,
        }),
        invalidatesTags: ["AffiliateAccount"],
      }),


      //   deleteCompte: builder.mutation<void, number>({
      //     query: (idCompte) => ({
      //       url: `removeUser/${idCompte}`,
      //       method: "DELETE",
      //     }),
      //     invalidatesTags: ["Account"],
      //   }),
    };
  },

});

export const {
  //   useUpdateAccountMutation,
  useLoginMutation,
  useUpdateAffiliateMutation,
  //   useDeleteCompteMutation,
} = affiliateSlice;
