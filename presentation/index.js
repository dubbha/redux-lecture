// Import React
import React from 'react';

// Import emotion to override styles
// https://github.com/FormidableLabs/spectacle#faq
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Appear,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  CodePane,
  Link
} from 'spectacle';

// Import custom theme instead the default one
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from '../assets/theme';

const imageFileNames = [
  // react
  'chernobyl.jpg',
  'chernobylBlurred.jpg',
  'react.svg',
  'books.png',
  'orly.png',
  'spa.jpg',
  'spaVsMpa.png',
  'virtualDom.png',
  'granularCode.png',
  'granularDomUpdates.gif',
  'propsState.png',
  'propsState2.png',
  'componentBasics1.webp',
  'componentBasics2.webp',
  'componentBasics3.webp',
  'componentBasics4.webp',
  'lifecycle.webp',
  'lifecycleExtended.webp',
  'reactDevTools.png',
  'syncState.webp',

  // hooks
  'hooks.jpg',
  'hooksBlurred.jpg',
  'whatever.jpg',
  'devCommunity.webp',
  'wrapperHell.webp',
  'reduxKiller.webp',
  'karloff.webp',

  // redux
  'redDucks.jpg',
  'readAxe.jpg',
  'collider.webp',
  'colliderBlurred.webp',
  'fbCounterIssue.png',
  'fbCounterIssueTeam.png',
  'mvc.png',
  'flux.png',
  'redux.png',
  'fluxVsRedux.jpg',
  'reduxDevTools.png',
  'dataFlow.gif',
  'asyncDataFlow.gif',

  // router
  'routes.webp',
  'routesBlurred.webp',
  'routerBasics1.webp',
  'routerBasics2.webp',
  'routerBasics3.webp',
  'hashRouter.png',
  'browserRouter.png',
  'browserRouterOnStatic.gif',
];
const reqImage = name => ({ [name.split('.')[0]]: require(`../assets/${name}`) });
const images = imageFileNames.reduce((acc, name) => ({ ...acc, ...reqImage(name) }), {});

const sourceFileNames = [
  // react
  'installCRA.js',
  'jsx.js',
  'jsx2.js',
  'jsx3.js',
  'jsx4.js',
  'events.js',
  'functionComponent.js',
  'classComponent.js',
  'classComponentWithState.js',
  'setState.js',
  'setState2.js',
  'setState3.js',
  'passingProps.js',
  'fragment.js',
  'hocLifecycle.js',
  'errorBoundary.js',
  'errorBoundaryUsage.js',
  'propTypes.js',
  'reactClassProperties.js',
  'keys.js',
  'pureComponent.js',

  // redux
  'reduxPrinciples1.js',
  'reduxPrinciples2.js',
  'reduxPrinciples3.js',
  'reduxPrinciples31.js',
  'combineReducers.js',
  'actionCreators.js',
  'createStore.js',
  'reduxThunk.js',
  'reduxThunk2.js',
  'reduxThunk3.js',
  'reduxThunkSource.js',
  'reduxSaga.js',
  'reduxSaga2.js',
  'reactRedux.js',
  'reactRedux2.js',
  'reselect.js',
  'reselect2.js',
  'reselect3.js',

  // router
  'routerInstall.js',
  'routerInstallCRA.js',
  'importBrowserRouter.js',
  'importHashRouter.js',
  'defaultSPARouteExpress.js',
  'defaultSPARouteDevServer.js',
  'route.js',
  'routeInclusiveRouting.js',
  'routeInclusiveRoutingUseCase.js',
  'routerHelloWorld.js',
  'switch.js',
  'link.js',
  'navlink.js',
  'redirect.js',
  'match.js',
  'location.js',
  'history.js',
  'withRouter.js',
  'routeRenderProtectedRoute.js',
  'customMatchParams.js',
  'blockedUpdates.js',
  'connectedReactRouterState.js',
  'connectedReactRouterAction.js',
  'connectedReactRouter.js',

  // hooks
  'hoc.js',
  'hocWithRouter.js',
  'renderProps.js',
  'renderPropsChildren.js',
  'giantComponent.js',
  'useState.js',
  'useStateFunctionalUpdates.js',
  'useStateLazyInitialState.js',
  'useEffect.js',
  'useEffectConditional.js',
  'useEffectOnMount.js',
  'useEffectCleanup.js',
  'useContext.js',
  'useReducer.js',
  'useReducerInit.js',
  'useCallback.js',
  'useMemo.js',
  'customHook.js',
  'customUseFormInput.js',
  'customUseDocumentTitle.js',
  'reactReduxApiHooks.js',
  'reactRouterApiHooks.js',
];
const reqSource = name => ({ [name.split('.')[0]]: require(`../assets/code/${name}`) });
const sources = sourceFileNames.reduce((acc, name) => ({ ...acc, ...reqSource(name) }), {});

const videos = {
  separationOfConcerns: require('../assets/separationOfConcerns.mp4'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#c11b01',
    quaternary: '#cecece',
    brainDark: '#c11b01',
    brainLight: '#f08920',
    blood: '#bb0a1e',
    bronze: '#cd7f32',
    asphalt: '#222f38',
    fire: '#c2261f',
    gray: '#1F2022',
    cartoon: '#006dc6',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// Break out of the 1000x700 box
// https://github.com/FormidableLabs/spectacle/issues/500
const FullScreenSlide = styled(Slide)`
  :first-child {
    max-width: 100%;
    max-height: 100%;
    padding: ${(props) => props.padding || 0};
  }
`;

const FullScreenImage = ({
  src,
  align = 'center',
  style = {}
}) => {
  let margin;
  switch (align) {
    case 'left':
      margin = '0 auto 0 0';
      break;
    case 'right':
      margin = '0 0 0 auto';
      break;
    case 'center':
    default:
      margin = '0 auto';
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      <Image
        src={src}
        style={{
          height: '100%',
          margin
        }}
      />
    </div>
  );
};

const Corner = ({ top, right, bottom, left, children }) => (
  <div
    style={{
      position: 'absolute',
      top,
      right,
      bottom,
      left,
      textAlign: (right ? 'right' : (left ? 'left' : 'center')) // eslint-disable-line
    }}
  >
    {children}
  </div>
);

/* eslint-disable react/prop-types */
const FullScreenVideo = ({ name, format = 'webm', loop = null }) => (
  <video
    // controls
    autoPlay
    { ...(loop ? { loop: true } : {}) }
    width="100%"
    height="100%"
    style={{
      position: 'absolute',
      top: 0,
      left: 0
    }}
  >
    <source src={videos[name]} type={`video/${format}`} />
  </video>
);

const Example = ({ name }) => {
  const path = `${name[0].toLowerCase()}${name.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  return (
    <Link href={`http://localhost:3001/${path}`} target="_blank" style={{ fontSize: '4vh' }}>{name}</Link>
  );
};

const Examples = ({ names }) => (
  <>
    <span style={{ fontSize: '4vh' }}>{names.length > 1 ? 'Examples: ' : 'Example: '}</span>
    {names.map((name, index) => (<React.Fragment key={name}>{index ? ', ' : ''}<Example name={name} /></React.Fragment>))}
  </>
);

const styles = {
  brain: {
    color: theme.screen.colors.brainDark,
  },
  brain3D: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px,
      ${theme.screen.colors.brainLight} 0px 4px 0px`
  },
  brain3DLight: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px`
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        showFullscreenControl={false}
        controls={false}
        progress="bar"
      >

        {/* Start of episode 1 */}
        <FullScreenSlide bgImage={images.chernobyl}>
          <div>
            {/* <img src={images.react} style={{ height: '60vh' }} /> */}
            {/* <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>To Be Continued...</Heading> */}
          </div>
        </FullScreenSlide>

        {/* Talk: how to sync state between two components, reminder of lifting state up, lift up to the main component - enough for global state? */}
        <FullScreenSlide bgImage={images.chernobylBlurred} padding={0}>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', margin: '5vh', }}>
            How do we synchronize states of the two sibling components?
          </Text>
          <Image src={images.syncState} />
        </FullScreenSlide>

        {/** Redux **/}
        <FullScreenSlide bgImage={images.redDucks} />
        <FullScreenSlide bgImage={images.readAxe} />
        <FullScreenSlide bgImage={images.collider}>
          <Corner bottom="33vh" right="18.9vw">
            <Heading caps style={{ ...styles.brain3D, fontSize: '14.63vh' }}>Redux</Heading>
          </Corner>
        </FullScreenSlide>
        <Slide bgColor="secondary">
          <Image src={images.fbCounterIssue} />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.fbCounterIssueTeam} />
        </Slide>
        <FullScreenSlide bgColor="secondary">
          <Text caps textColor="cartoon" style={{ fontSize: '7vh', fontWeight: 'bold', margin: '5vh 0 2vh 0', textAlign: 'center' }}>
            MVC doesn't scale well
          </Text>
          <Image src={images.mvc} />
          {/*
            Connections between Models and Views are bidirectional causing the following:
              - it’s hard to track down cyclic dependencies
              - cascading data updates are hard to follow
              - code is imperative, data flows are hard to reason about
              - system is fragile, adding new features is dangerous
              - bugs are hard to track down
          */}
        </FullScreenSlide>
        <FullScreenSlide bgColor="secondary">
          <Text caps textColor="cartoon" style={{ fontSize: '7vh', fontWeight: 'bold', margin: '5vh 0', textAlign: 'center' }}>
            MVC doesn't scale well
          </Text>
          <Text textColor="cartoon" style={{ fontSize: '3vh', fontWeight: 'bold', margin: '0 10vw', textAlign: 'left' }}>
            Connections between Models and Views are bidirectional causing the following:
            <List>
              <ListItem style={{ fontSize: '3vh', fontWeight: 'normal' }}>it’s hard to track down cyclic dependencies</ListItem>
              <ListItem style={{ fontSize: '3vh', fontWeight: 'normal' }}>cascading data updates are hard to follow</ListItem>
              <ListItem style={{ fontSize: '3vh', fontWeight: 'normal' }}>code is imperative, data flows are hard to reason about</ListItem>
              <ListItem style={{ fontSize: '3vh', fontWeight: 'normal' }}>system is fragile, adding new features is dangerous</ListItem>
              <ListItem style={{ fontSize: '3vh', fontWeight: 'normal' }}>bugs are hard to track down</ListItem>
            </List>
          </Text>
        </FullScreenSlide>
        <Slide bgColor="secondary">
          <Text caps textColor="cartoon" style={{ fontSize: '7vh', fontWeight: 'bold', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Flux
          </Text>
          <Image src={images.flux} />
        </Slide>
        <Slide bgColor="secondary">
          <Text caps textColor="cartoon" style={{ fontSize: '7vh', fontWeight: 'bold', margin: '5vh 0 2vh 0', textAlign: 'left' }}>
            Redux
          </Text>
          <Image src={images.redux} />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.fluxVsRedux} />
          {/* Flux:							                              Redux:
              - Singleton Dispatcher		                      - No Dispatcher, store.dispatch() method
              - Multiple Stores					                      - Single Store
              - Mutable State					                        - Immutable State
              - Store callbacks registered with Dispatcher		- Reducers, pure functions
              - Store getter methods				                  - Selectors */}
        </Slide>

     
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 7vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            One Way Data Flow
          </Heading>
          <List>
            <ListItem style={{ fontSize: '3.3vh' }}>State describes the condition of the app at a specific point in time</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>Actions are dispatched in response to a user interaction like a click</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>Store calculates a new state</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>UI is re-rendered based on that state</ListItem>
          </List>
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 7vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Redux Data Flow
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>Initial setup:</Text>
          <List>
            <ListItem style={{ fontSize: '3.3vh' }}>A Redux store is created using a root reducer function</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>The store calls the root reducer once, and saves the return value as its initial state</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.</ListItem>
          </List>
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 7vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Redux Data Flow
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>Updates:</Text>
          <List>
            <ListItem style={{ fontSize: '3.3vh' }}>Something happens in the app, such as a user clicking a button</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>The app code dispatches an action to the Redux store</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>The store notifies all parts of the UI that are subscribed that the store has been updated</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>Each UI component that needs data from the store checks to see if the parts of the state they need have changed</ListItem>
            <ListItem style={{ fontSize: '3.3vh' }}>Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen</ListItem>
          </List>
        </FullScreenSlide>

        <FullScreenSlide bgColor="secondary">
          <Heading style={{ fontSize: '4vh', margin: 0 }}>
            Redux Data Flow
          </Heading>
          <Image src={images.dataFlow} />
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 7vw">
          <Heading style={{ fontSize: '8vh', margin: 0 }}>
            Three Principles of Redux
          </Heading>
          <List>
            <ListItem style={{ fontSize: '5vh' }}>Single source of truth</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>State is read-only</ListItem>
            <ListItem style={{ fontSize: '5vh' }}>Changes are made with pure functions</ListItem>
          </List>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Single source of truth
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>
            The state of your whole application is stored in an object tree within a single store
          </Text>
          <CodePane source={sources.reduxPrinciples1} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            State is read-only
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>
            The only way to change the state is to emit an action, an object describing what happened
          </Text>
          <CodePane source={sources.reduxPrinciples2} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading caps style={{ fontSize: '5vh', margin: 0, textAlign: 'left' }}>
            Changes are made with pure functions
          </Heading>
          <Text textColor="secondary" style={{ fontSize: '3.8vh', marginTop: '2vh', textAlign: 'left' }}>
            To specify how the state tree is transformed by actions, you write pure reducers
          </Text>
          <CodePane source={sources.reduxPrinciples3} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxPrinciples31} style={{ maxHeight: '90vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            combineReducers, createStore
          </Heading>
          <CodePane source={sources.combineReducers} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Corner right="2vw" bottom="2vh"><Link href="http://localhost:3001/combine-reducers" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Action creators
          </Heading>
          <CodePane source={sources.actionCreators} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Corner right="2vw" bottom="2vh"><Link href="http://localhost:3001/action-creators" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            createStore, applyMiddleware
          </Heading>
          <CodePane source={sources.createStore} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Corner right="2vw" bottom="2vh">
            <Link href="http://localhost:3001/middleware" target="_blank" style={{ fontSize: '4vh' }}>Middleware</Link>, <Link href="http://localhost:3001/several-middlewares" target="_blank" style={{ fontSize: '4vh' }}>SeveralMiddlewares</Link>
          </Corner>
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding={0}>
          <Image src={images.reduxDevTools} />
          <Corner right="2vw" bottom="2vh">
            <Link href="http://localhost:3001/redux-dev-tools" target="_blank" style={{ fontSize: '4vh' }}>ReduxDevTools</Link>, <Link href="http://localhost:3001/compose-with-dev-tools" target="_blank" style={{ fontSize: '4vh' }}>ComposeWithDevTools</Link>
          </Corner>
        </FullScreenSlide>

        <FullScreenSlide bgColor="secondary">
          <Heading style={{ fontSize: '4vh', margin: 0 }}>
            Redux Async Data Flow
          </Heading>
          <Image src={images.asyncDataFlow} />
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Async actions: Redux Thunk
          </Heading>
          <CodePane source={sources.reduxThunk} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxThunk2} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Corner right="2vw" bottom="2vh"><Link href="http://localhost:3001/async-action-creators" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxThunk3} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Redux Thunk source code
          </Heading>
          <CodePane source={sources.reduxThunkSource} style={{ maxHeight: '99vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ marginBottom: '3vh', fontSize: '3.8vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
            Isolation of effects is why I prefer redux-saga over thunks
            </Quote>
            <Quote textColor="secondary" style={{ fontSize: '3.8vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
            Switch to redux-saga<br/>Keep side-effects isolated from your reducers and action creators
            </Quote>
            <Cite margin="10px 0 0 30px">Eric Elliot</Cite>
          </BlockQuote>
          <Corner right="2vw" bottom="2vh">
            <Link href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672#a971" target="_blank" style={{ fontSize: '4vh' }}>Proof</Link>, <Link href="https://medium.com/@_ericelliott/switch-to-redux-saga-keep-side-effects-isolated-from-your-reducers-and-action-creators-8bd846aa9dd1" target="_blank" style={{ fontSize: '4vh' }}>Proof</Link>
          </Corner>
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Async actions: Redux Saga
          </Heading>
          <CodePane source={sources.reduxSaga} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reduxSaga2} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Usage with React: React Redux
          </Heading>
          <CodePane source={sources.reactRedux} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reactRedux2} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Corner right="2vw" bottom="2vh"><Link href="http://localhost:3001/react-redux" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide>

        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Usage with React: React Redux API Hooks
          </Heading>
          <CodePane source={sources.reactReduxApiHooks} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Corner right="2vw" bottom="2vh"><Link href="http://localhost:3001/react-redux-hooks" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide>

        {/* End of episode 1 */}
        <FullScreenSlide bgImage={images.chernobyl}>
          <Corner right="7vw" bottom="10vh">
            <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>To Be Continued...</Heading>
          </Corner>
        </FullScreenSlide>


        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <Heading style={{ fontSize: '5vh', margin: '0 0 2vh', textAlign: 'left' }}>
            Computing derived data: Reselect
          </Heading>
          <CodePane source={sources.reselect} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reselect2} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.colliderBlurred} padding="0 0.5vw">
          <CodePane source={sources.reselect3} style={{ maxHeight: '98vh', overflowY: 'auto' }} lang="jsx" theme="light" />
        </FullScreenSlide>


        {/* Router/Redux Integration, blocked updates; Deep Integration, connected-react-router */}
        {/* <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Heading caps style={{ ...styles.brain, lineHeight: '10vh', fontSize: '8vh', margin: 0 }}>Redux Integration</Heading>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            <span style={{ ...styles.brain }}>Blocked Updates</span> issue happens when a <span style={{ ...styles.brain }}>connected</span> component is not a <span style={{ ...styles.brain }}>route</span> component.
            Redux implements shouldComponentUpdate and there are no props from the Router.
            The fix is withRouter:
          </Text>
          <CodePane source={sources.blockedUpdates} style={{ maxHeight: '75vh', overflowY: 'auto' }} lang="jsx" theme="light" />
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            <span style={{ ...styles.brain }}>Deep Integration</span> is required to:
            <ul style={{ margin: 0 }}>
              <li>Synchronize routing data with the store, access from the store</li>
              <li>Be able to navigate by dispatching actions</li>
              <li>Have support for time travel debugging for route changes</li>
            </ul>
          </Text>
          <Text textColor="secondary" style={{ fontSize: '4.5vh', marginTop: '2vh', textAlign: 'left' }}>
            React Router team does not recomment Deep Integration:
            <ul style={{ margin: 0 }}>
              <li>Routing data is already a prop of route components</li>
              <li>For async navigation you can pass history object in action payload</li>
              <li>Route changes are unlikely to matter for time travel debugging</li>
            </ul>
          </Text>
          <Corner right="0.5vw" bottom="0.5vh"><Link href="https://reacttraining.com/react-router/web/guides/redux-integration" target="_blank" style={{ fontSize: '4vh' }}>Redux Integration</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw 1vh 0.5vw">
          <Heading style={{ ...styles.brain, lineHeight: '10vh', fontSize: '8vh', margin: 0 }}>Connected React Router</Heading>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            Synchronizes Router state with Redux store through uni-directional flow:
          </Text>
          <Text textColor="secondary" textSize="4.5vh" textAlign="left">
            history → store → router → components
          </Text>
          <div style={{ minWidth: '48.75vw', maxWidth: '48.75vw', margin: '0 0.25vw 0 0', display: 'inline-block', verticalAlign: 'top' }}>
            <CodePane
              lang="jsx"
              source={sources.connectedReactRouterState}
              theme="light"
              style={{ maxHeight: '75vh', overflowY: 'auto' }}
            />
          </div>
          <div style={{ minWidth: '48.75vw', maxWidth: '48.75vw', margin: '0 0 0 0.25vw', display: 'inline-block', verticalAlign: 'top' }}>
            <CodePane
              lang="jsx"
              source={sources.connectedReactRouterAction}
              theme="light"
              style={{ maxHeight: '75vh', overflowY: 'auto' }}
            />
          </div>
          <Corner right="0.5vw" bottom="0.5vh"><Link href="https://github.com/supasate/connected-react-router" target="_blank" style={{ fontSize: '4vh' }}>connected-react-router</Link></Corner>
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.routesBlurred} padding="0 0.5vw">
          <CodePane
            lang="jsx"
            source={sources.connectedReactRouter}
            theme="light"
            style={{ maxHeight: '96vh', overflowY: 'auto' }}
          />
          <Corner right="2vw" bottom="2vh"><Link href="https://codesandbox.io/s/connected-react-router-yllkz" target="_blank" style={{ fontSize: '4vh' }}>Example</Link></Corner>
        </FullScreenSlide> */}

        {/* End of episode 1 */}
        {/* <FullScreenSlide bgImage={images.chernobyl}>
          <div>
            <img src={images.react} style={{ height: '60vh' }} />
            <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>To Be Continued...</Heading>
          </div>
        </FullScreenSlide> */}

        {/* Some more hooks! Maybe captain hook here */}
        {/* <FullScreenSlide bgImage={images.karloff}>
          <Corner left="6vw" bottom="3vh"><Heading size={2} style={{ color: '#d2d2d2' }}>More Hooks!!</Heading></Corner>
        </FullScreenSlide> */}

        {/* Redux Killer */}
        {/* Remind them of what useReducer and useContext are, talk about pros and cons */}
        {/* <Slide>
          <BlockQuote>
            <Quote textColor="secondary" style={{ fontSize: '5vh', lineHeight: 1.2, borderColor: theme.screen.colors.secondary }}>
              Throw this thing on context...
            </Quote>
            <Cite margin="10px 0 0 30px">Ryan Florence</Cite>
          </BlockQuote>
          <div style={{ fontSize: '4vh' }}><Corner right="2vw" bottom="2vh">useReducer + useContext = <Link href="https://codesandbox.io/s/redux-killer-c4n9b" target="_blank" style={{ fontSize: '4vh' }}>ReduxKiller</Link></Corner></div>
        </Slide>
        <Slide>
          <Image src={images.reduxKiller} />
          <Corner right="2vw" bottom="2vh"><Link href="https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672" target="_blank" style={{ fontSize: '4vh' }}>Do React Hooks Replace Redux?</Link></Corner>
        </Slide> */}

        {/* Router, Redux API Hooks */}
        {/* <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>React Redux API Hooks</Heading>
          <CodePane source={sources.reactReduxApiHooks} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide>
        <FullScreenSlide bgImage={images.hooksBlurred} padding="0 0.4em">
          <Heading size={3} style={{ ...styles.brain }}>React Router API Hooks</Heading>
          <CodePane source={sources.reactRouterApiHooks} lang="jsx" theme="light" style={{ maxHeight: '80vh', overflowY: 'auto' }} />
        </FullScreenSlide> */}

        {/* Thanks */}
        <FullScreenSlide bgImage={images.chernobyl}>
          <div>
            <img src={images.react} style={{ height: '60vh' }} />
            <Heading caps style={{ ...styles.brain3D, fontSize: '21vh', lineHeight: 1.2 }}>Thanks</Heading>
            <Heading caps style={{ ...styles.brain, fontSize: '5.1vh' }}>Oleksiy <span style={styles.brain3DLight}>Лёша</span> Dubovyk</Heading>
          </div>
        </FullScreenSlide>
      </Deck>
    );
  }
}
