import {useState, useEffect} from 'react';
// import axios from 'axios';
import {baseAPI} from '../../globalConst';
import useFetch from '../../hooks/useFetch';

export const getAll = (url, payload) =>useFetch(`${baseAPI}${url}`, payload);

