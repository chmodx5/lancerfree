import { useState } from "react";
import { useRouter } from "next/router";
// import { GuestLayout } from "../Components/Layouts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Button from "@mui/material/Button";

export default function Home() {
  const location = useRouter();
  const [count, setCount] = useState();
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <GuestLayout>{page}</GuestLayout>;
// };
