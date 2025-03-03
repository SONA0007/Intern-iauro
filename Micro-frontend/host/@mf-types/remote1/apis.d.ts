
    export type RemoteKeys = 'remote1/src/RemoteButton.tsx';
    type PackageType<T> = T extends 'remote1/src/RemoteButton.tsx' ? typeof import('remote1/src/RemoteButton.tsx') :any;