import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <p>The page you are looking for does not exist.</p>
      <Image src="/file.svg" alt="Not Found" width={400} height={300} />
    </>
  );
}
