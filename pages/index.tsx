import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import StitchesLogo from '../components/StitchesLogo'
import { styled } from '../stitches.config';
import Homescreen from './taskScreen/homescreen';
export default function Home() {
  return (
    <Homescreen />
  )
}
