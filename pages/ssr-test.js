import Layout from '../components/Layout';

class SSRTest extends React.Component {
  static async getInitialProps ({req}) {
    return req
      ? { from: 'server' }
      : { from: 'client' }
  }

  render() {
    return (
      <Layout>
        {this.props.from}
      </Layout>
    );
  };
};

export default SSRTest;