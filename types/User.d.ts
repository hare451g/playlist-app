export default interface User {
  id: string;
  type: 'user';
  uri: string;
  country?: string;
  display_name?: string;
  email?: string;
  external_urls?: { spotify?: string };
  followers?: { href?: string; total?: number };
  href: string;
  images?: [
    {
      height?: string | number;
      url?: string;
      width?: string;
    }
  ];
  product?: string;
}
