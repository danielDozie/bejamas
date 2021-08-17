import React from 'react';
import UpperSection from '../components/UpperSection'
import LowerSection from '../components/LowerSection'

import {useQuery} from '@apollo/client';
import {ALL_PRODUCTS} from '../graphQL/apollo_queries'



export default function Home() {
    const { loading, error, data } = useQuery(ALL_PRODUCTS);
        if (loading) return ('Loading');
        if (error) return `Error! ${error.message}`;

        console.log(JSON.stringify(data));
        //console.log(data);
       // console.log(data);


  return (
      <>
      <UpperSection />
      <LowerSection />
      </>
  );
}
