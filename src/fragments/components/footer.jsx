import { Fragment } from 'preact';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient()

export function Footer() {
    return (
        <Fragment>
          <QueryClientProvider client={queryClient}>
            <FooterContent />
          </QueryClientProvider>
        </Fragment>
    )
}

function FooterContent() {
  const { isLoading, error, data } = useQuery('userData', () =>
    fetch(`https://api.github.com/repos/wombat24455/better-experience-search/commits`).then(res =>
      res.json()
    )
  )
  
  if (isLoading) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;

  const buildSHA = data["0"]["sha"].toString().slice(0,7);
  
  return (
    <p class="footer">
      &copy; {new Date().getFullYear()} <a href="https://www.womble.xyz" target="_blank">wombat24455</a> - build {buildSHA}
    </p>
  )
}