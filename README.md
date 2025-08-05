# Deploy Box React Native Library

This package exposes the reusable UI components from the **DeployBox** folder of the SPS mobile app as a standalone React Native library. The components included are currently:

- **MediaItem** – fetches and displays an image or video from a backend service when given a media identifier.
- **Text** – a typography component that supports custom fonts and colours defined by your app’s theme.

## Installation

Install directly from the repository:

```sh
# using npm
npm install git+https://github.com/kalebwbishop/deploy-box-react-native-lib.git

# using yarn
yarn add git+https://github.com/kalebwbishop/deploy-box-react-native-lib.git
```

## Usage

```tsx
import { MediaItem, Text } from '@kalebwbishop/deploy-box-react-native-lib';

export default function Example() {
  return (
    <>
      <Text>Hello World</Text>
      <MediaItem media={{ id: '123', media_type: 'image' }} style={{ width: 200, height: 200 }} />
    </>
  );
}
```

## Development

This project is written in TypeScript and was created by extracting the `DeployBox` folder from the private SPS mobile repository. Any updates to the components in that folder should also be ported to this package.

## License

MIT
