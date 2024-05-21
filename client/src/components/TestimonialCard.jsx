// import React from "react";
// import { Card, CardContent, CardHeader, Typography } from "@mui/material";

// export default function TestimonialCard(data) {
// //   console.log(data);
//   const { imgUrl, desc, name } = data.data;
// //   console.log(imgUrl);
// //   console.log(desc);
// //   console.log(name);
//   return (
//     <Card sx={{ maxWidth: 200, minWidth: 300, height: 200 }}>
//       <CardContent>
//         <Typography variant="body2" color="text.primary" sx={{ fontSize: 15 }}>
//           {desc}
//         </Typography>
//       </CardContent>
//       <CardHeader
//         avatar={
//           <img
//             src={imgUrl} // Replace with your image URL
//             alt="Avatar"
//             style={{ width: 40, height: 40, borderRadius: "50%" }}
//           />
//         }
//         title={<Typography sx={{ fontSize: 15 }}>{name}</Typography>}
//       />
//     </Card>
//   );
// }





import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function TestimonialCard({ data }) {
  const { imgUrl, desc, name } = data;

  return (
    <Card sx={{ maxWidth: 200, minWidth: 300, height: 200, borderRadius: 0, margin: '0 10px' }}>
      <CardContent>
        <Typography variant="body2" color="text.primary" sx={{ fontSize: 15 }}>
          {desc}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <img
            src={imgUrl}
            alt="Avatar"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        }
        title={<Typography sx={{ fontSize: 15 }}>{name}</Typography>}
      />
    </Card>
  );
}
