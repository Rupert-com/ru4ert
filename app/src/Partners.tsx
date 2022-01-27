import { Box, Container } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import src from './@static/media/728 X 90 V2.jpg'

type IPartnersProps = {}
type IPartnersState = {}

export const Partners: FunctionComponent<IPartnersProps> = props => {
  const [values, setState] = useState<IPartnersState>({})

  return (
    <Container>
      {/* @ts-ignore */}
      <img style={{ margin: 'auto' }} src={src} alt="Sixth Edition Promo" useMap="#image-map" />

      <map name="image-map">
        <area
          target="_blank"
          alt="African Color Wallet Sixth Edition"
          title="African Color Wallet Sixth Edition"
          href="https://thesixthedition.com/products/african-colors?sc=rupert&amp;pl=1"
          coords="44,55,40"
          shape="circle"
        />
        <area
          target="_blank"
          alt=""
          title=""
          href="https://thesixthedition.com/"
          coords="400,-1,726,89"
          shape="rect"
        />
        <area
          target="_blank"
          alt="Walk in Fall Wallet Sixth Edition"
          title="Walk in Fall Wallet Sixth Edition"
          href="https://thesixthedition.com/products/walk-in-fall?sc=rupert&amp;pl=1"
          coords="347,54,49"
          shape="circle"
        />
        <area
          target="_blank"
          alt="Owl Wallet Sixth Edition"
          title="Owl Wallet Sixth Edition"
          href="https://thesixthedition.com/products/owl?sc=rupert&amp;pl=1"
          coords="187,62,34"
          shape="circle"
        />
      </map>
    </Container>
  )
}
