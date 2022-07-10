import { Box, Button } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import React, { FunctionComponent, ReactNode, useState } from 'react'

export const FILE = __filename
type IReadMoreProps = {
  pre?: ReactNode | undefined
  more?: boolean
  children: ReactNode
}
type IReadMoreState = {
  more: boolean
}

export const ReadMore: FunctionComponent<IReadMoreProps> = ({ pre, children, more }) => {
  const [values, setState] = useState<IReadMoreState>({ more: more ?? false })

  return (
    <>
      {!values.more && pre && <Box sx={visuallyHidden}>{children}</Box>}
      {!values.more && pre ? pre : children}
      {pre && (
        <Button onClick={event => setState({ ...values, more: !values.more })}>
          {!values.more ? 'Read more' : 'Read less'}
        </Button>
      )}
    </>
  )
}
