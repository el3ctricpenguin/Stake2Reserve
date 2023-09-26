/**
 * 画像を直接BASE64に変換する
 * 通常のWEBではいいが、WEB3ではトランザクションのサイズがバカでかいので、
 * これを直接スマコンの引数に渡すと、トランザクションがタイムアウトして
 * 失敗する
 */
export function encodeImageFileAsURL(element, callback) {
  let file = element.files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    // console.log("RESULT: ", reader.result);
    // setRestaurantImgURL(reader.result);
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

export const MockUSDCAddress = "0x9f520C13CAfbdCc7D073709A4864557a8d12f256";
export const S2RNFTAddress = "0xBD137071aAefF063d9bAB871023c10a37Fc21d42";
export const Stake2ReserveAddress =
  "0x1100362CB4e29c5E32CbA09D76e884dB76c8af66";
