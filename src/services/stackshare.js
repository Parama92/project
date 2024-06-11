require("esm-hook"); // <--- add this to the top of your file.

const fetch = require("node-fetch").default;

async function fetchNextBatch(cursor) {
  const results = await fetch("https://graphql.stackshare.io/graphql", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-csrf-token":
        "A6dq4z9DrczKOrL7nCJyt5p_1MospbHM_TeNlqjY75YTEua_Bk6q_rftT78WXsH9x_Sg-wIGPCol_ANk4I_IVg",
      cookie:
        "_ga=GA1.1.2128669922.1717127264; _clck=1l1davn%7C2%7Cfm8%7C0%7C1612; ajs_anonymous_id=9bb3bfbd-1eb3-4772-89aa-35a426412cb7; __stripe_mid=0f4f1852-c721-43ac-909c-2a8db39a12b170c958; __stripe_sid=e0c7c330-5d61-4c99-8ca0-d6ae0fe7743c9e5608; ko_id=b208ee24-f50a-4b2d-8389-97bee4e2c318; uvts=3089577c-17e9-4174-7dd5-bf3bec7cd06a; uvts=3089577c-17e9-4174-7dd5-bf3bec7cd06a; AMP_MKTG_63407ddf70=JTdCJTIycmVmZXJyZXIlMjIlM0ElMjJodHRwcyUzQSUyRiUyRmFjY291bnRzLmdvb2dsZS5jb20lMkYlMjIlMkMlMjJyZWZlcnJpbmdfZG9tYWluJTIyJTNBJTIyYWNjb3VudHMuZ29vZ2xlLmNvbSUyMiU3RA==; ajs_user_id=1304556; ko_sid={%22id%22:%221717127266650%22%2C%22lastTouched%22:1717129225523}; _ga_E103MB5HTE=GS1.1.1717127263.1.1.1717129228.0.0.0; _clsk=18rv2oi%7C1717129229537%7C7%7C1%7Cx.clarity.ms%2Fcollect; _stackshare_production_session=ts1WtOdeJUkVTWrQnFJ0JnMQmg03wSAHT4%2BO7inFUD6WnXFhgM4QQUymBRBMcNpAlvIA1saQzLijW88zam4jETdGNh1FneybdlGBQzei3ZZjlSehKLrXCGbxEoQ3Z5UEmFT4szvPWQRI2ajviKrTRzQdi6MuG%2BygeDG5lSIANwa2BwMlN4diqUVtqFpmdc%2BJrsQS4eHJx%2BLk4bKoV1mVHZv82Rr2OAVrnJcYxGrDC3q7%2BFWgovEQH7z%2F0826nhw4j9SKa3jewLhgxbtdiRolhpOaLeUQib7HhlJ4PWraNEv%2FfUs0w0N%2F6GV%2FDb7TCiID%2FIF7WkXzZouWcXsiaafkzsNLJw2ilp7Tm4%2Bv%2Fk%2BejeCjBXG%2B4CBVJF6js%2FNWvqqR2HcDqBPlGZA9zMAMLaLySTmSukZRauG3dTI2M3%2Bxt3f9l8mpgi%2BruYWCYlBqe9ApJNjvpJ1rKA4bdV5DYw4dxfHV8lByUkcHzPSYHepARQJE6qGETTX1Ut8PdxS9SugX7PYNoHjTt64G6lAd1D0OCVLT6KqStSdzCogztpSFwozIh9tU7HYc5Q%3D%3D--RUdaJTlDoI4TkcVY--vsnn2%2BrfwBa3M%2BlJoFFG%2BQ%3D%3D; AMP_63407ddf70=JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjJlOGM0NWJkOC01ZmJjLTRiZTAtODU5MS01YzNhZjJlYTA5YWIlMjIlMkMlMjJ1c2VySWQlMjIlM0ExMzA0NTU2JTJDJTIyc2Vzc2lvbklkJTIyJTNBMTcxNzEyNzI4NjExNCUyQyUyMm9wdE91dCUyMiUzQWZhbHNlJTJDJTIybGFzdEV2ZW50VGltZSUyMiUzQTE3MTcxMjkyMzAxNDclMkMlMjJsYXN0RXZlbnRJZCUyMiUzQTEyJTdE",
      Referer: "https://stackshare.io/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `{"operationName":"companyStacksUsing","variables":{"id":"101231773705712932","first":9${
      cursor ? `,"after":"${cursor}"` : ``
    }},"query":"query companyStacksUsing($id: ID!, $after: String, $first: Int) {\\n  tool(id: $id) {\\n    companyStacksUsing(first: $first, after: $after) {\\n      count\\n      pageInfo {\\n        hasNextPage\\n        endCursor\\n        __typename\\n      }\\n      edges {\\n        node {\\n          name\\n          imageUrl\\n          thumbUrl\\n          thumbRetinaUrl\\n          identifier\\n          id\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    id\\n    __typename\\n  }\\n}\\n"}`,
    method: "POST",
  }).then((res) => res.json());
  return results;
}

module.exports = {
  fetchNextBatch,
};
