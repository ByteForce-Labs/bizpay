import React from 'react';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';

import { shortenAddress } from '../utils';
import Identicon from '../Identicon';
import Image from 'next/image';
import Modal from '../Modal';
import styles from './styles.module.scss';

const User = ({ user, onClose, children }) => {
  if (!user) return <div className={styles.holder}>{children}</div>;

  return (
    <Link href={`/account/${user?.address}`}>
      <a className={styles.holder} onClick={onClose}>
        {children}
      </a>
    </Link>
  );
};

const LikesModal = ({ visible, onClose, users }) => {
  return (
    <Modal visible={visible} title="Liked by" onClose={onClose}>
      {users.map((user, idx) => (
        <User key={idx} user={user} onClose={onClose}>
          <div className={styles.holderInfo}>
            <div className={styles.avatarWrapper}>
              {!user ? (
                <Skeleton width={40} height={40} />
              ) : user.imageHash ? (
                <Image
                  src={`https://cloudflare-ipfs.com/ipfs/${user.imageHash}`}
                  width={40}
                  height={40}
                />
              ) : (
                <Identicon
                  account={user.address}
                  size={40}
                  className={styles.avatar}
                />
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.alias}>
                {user ? (
                  user.alias || 'Unnamed'
                ) : (
                  <Skeleton width={100} height={20} />
                )}
              </div>
              <div className={styles.address}>
                {user ? (
                  shortenAddress(user.address)
                ) : (
                  <Skeleton width={100} height={20} />
                )}
              </div>
            </div>
          </div>
        </User>
      ))}
    </Modal>
  );
};

export default LikesModal;
