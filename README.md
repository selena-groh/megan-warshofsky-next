# megan-warshofsky-next

A personal website

<!-- See it live at ____ -->

## Technologies

- [Next.js](https://nextjs.org/)
- [Contentful](https://www.contentful.com/)
- [Vercel](https://vercel.com/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Vidstack](https://vidstack.io/)

## Local Development

```sh
git clone <repo URL>
cd megan-warshofsky-next
yarn
```

This application requires Contentful secrets. Get the Contentful Space ID and Access Key from Contentful, and then create a `.env.local` file in the root of the repository that looks like the following:

```
CONTENTFUL_SPACE_ID=space_id_here
CONTENTFUL_ACCESS_TOKEN=access_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=preview_access_token_here
```

Finally, run the following to get the application running locally:

```sh
yarn run dev
```
