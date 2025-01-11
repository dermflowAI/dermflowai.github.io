import './App.css'

import { useContext } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import Desktop from './Desktop'
import Mobile from './Mobile'
import Cookies from './policy/cookies'
import Privacy from './policy/privacy'
import Terms from './policy/terms'
import IPhoneLogos from './scratch/IphoneLogos'
import { SectionList } from './Desktop'

import {
  useReducer,
} from 'react'

import {
  Context,
  initialState,
} from './store/Context'

import {
  reducer,
} from './store/reducer'

import { SectionItemImageOnTheRight } from './Desktop'

function RouteElementsDesktop() {
  const {state, dispatch} = useContext(Context)
  const routeElements = useRoutes([
    { path: '/', element: <SectionList sectionList={state.sectionList} />},
    // <SectionItemImageOnTheRight sectionItem={state.sectionList[0]} backgroundColor={null} appleStoreBadge={state.appleStoreBadge} appleStoreLink={state.appleStoreLink}/>},
    { path: '/policy/cookies', element: <Cookies /> },
    { path: '/policy/privacy', element: <Privacy /> },
    { path: '/policy/terms', element: <Terms /> },
    { path: '/logos', element: <IPhoneLogos /> },
  ]);
  return routeElements
}

function RouteElementsMobile() {
  const routeElements = useRoutes([
    { path: '/', element: <Mobile /> },
    { path: '/policy/cookies', element: <Cookies /> },
    { path: '/policy/privacy', element: <Privacy /> },
    { path: '/policy/terms', element: <Terms /> },
  ]);
  return routeElements
}

function DesktopApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  
  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <RouteElementsDesktop />
      </BrowserRouter>
    </Context.Provider>
  )
}

function MobileApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <RouteElementsMobile />
      </BrowserRouter>
    </Context.Provider>
  )
}

function App() {
  function isDesktop() {
    return  500 < window.innerWidth
  }

  return (
    <>
    {
      isDesktop() ? <DesktopApp /> : <MobileApp />
    }
    </>
  )
}

export default App
