import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { H1, H2, H3, H4, H5, H6, P } from '../../../src/core/text'

type Props = {} & RouteComponentProps

export function TextPage(props: Props) {
  return (
    <>
      <H2>Core / Text</H2>
      <H1 marginBottom>h1. Heading</H1>
      <H2 marginBottom>h2. Heading</H2>
      <H3 marginBottom>h3. Heading</H3>
      <H4 marginBottom>h4. Heading</H4>
      <H5 marginBottom>h5. Heading</H5>
      <H6 marginBottom>h6. Heading</H6>
      <P marginBottom variant="p.lead">
        p. Paragraph lead. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Maecenas ornare libero risus, ac condimentum sapien egestas ut.
        Phasellus at tortor in nisl faucibus bibendum. Ut eget purus est. Nullam
        laoreet est ut est tincidunt, non porta ligula efficitur. Cras dignissim
        eleifend tristique. Pellentesque sit amet est cursus, placerat dolor id,
        pharetra neque.
      </P>
      <P marginBottom>
        p. Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec at metus non arcu vestibulum fermentum. Aenean consectetur in enim
        id porta. Aliquam laoreet sem vitae eros tincidunt, at sodales orci
        fringilla. Praesent in ex tortor. Nunc hendrerit a turpis id
        consectetur. Curabitur vulputate efficitur enim, eu fermentum libero
        lacinia quis.
      </P>
      <P marginBottom variant="p.small">
        p. Paragraph small. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam non tortor ut quam viverra gravida sed id arcu. Donec sit
        amet volutpat quam. Duis nunc enim, tristique at suscipit nec, rutrum
        sit amet lacus. Ut nunc turpis, sodales id ligula eu, fermentum
        ultricies sapien. Vivamus sed est sit amet orci imperdiet imperdiet vel
        et eros.
      </P>
      <H2>Colors</H2>
      <H1 color="neutral">neutral</H1>
      <H1 color="default">default</H1>
      <H1 color="primary">primary</H1>
      <H1 color="secondary">secondary</H1>
    </>
  )
}
