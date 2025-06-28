import { ShareSocial } from "react-share-social";
import useStyle from "./styles";

interface ShareModalProps {
  visible?: boolean;
}

const ShareModal = ({ visible }: ShareModalProps) => {
  const styles = useStyle();
 // This is how you import environment variables in Vite / React.   
  const urldemo = `${import.meta.env.VITE_localhost}`;

  return (
    <div style={styles.container}>
      {visible && (
        <ShareSocial
          url={urldemo}
          socialTypes={[
            "facebook",
            "twitter",
            "reddit",
            "linkedin",
            "whatsapp",
          ]}
          style={styles.shareModalStyles}
        />
      )}
    </div>
  );
};

export default ShareModal;
