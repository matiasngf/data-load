import React from 'react'
// import GlobalStyle from 'todo:styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withGlobalTheme = (Story, context) => {
  return (
    <>
        {/* <GlobalStyle/> */}
        <Story {...context}/>
    </>
  )
}

export const decorators = [withGlobalTheme]

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
      ],
    },
  },
};