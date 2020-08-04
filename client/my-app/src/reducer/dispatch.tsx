import { useDispatch } from "react-redux"

import React, { useState } from 'react'
 
export default function ReduxStorage(datasources: any, dispatch:any) { 
    datasources.map((datasource: any) => dispatch({ type: 'ADD_DATASOURCE', datasource: { ...datasource } }))
  }

 