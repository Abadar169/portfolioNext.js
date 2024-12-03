"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  // Optionally, you can log the error to the console or perform other actions
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
