import React from 'react';
import {render , cleanup , waitForElement} from '@testing-library/react';
import { toBeInTheDocument, toHaveStyle , toHaveTextContent} from
    '@testing-library/jest-dom';
import axiosMock from "axios"

import { useAuth0 } from "@auth0/auth0-react";
import DashboardPage from "../DashboardPage"

afterEach(cleanup);

it('fetches and displays the data' , ()=>{

})