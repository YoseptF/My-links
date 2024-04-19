import { FC } from "react";
import { Link } from "../utils/links";
import styles from './LinkList.module.css';

interface LinkListProps {
  links: Link[];
}

const LinkList: FC<LinkListProps> = ({ links }) => {
  return (
    <ul className={styles.LinkList}>
      {
        links.map(({ title, url, Icon }) => (
          <a
            href={url}
            key={`link-to-${url}`}
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <Icon />
              {title}
            </li>
          </a>
        ))}
    </ul>
  )
}

export default LinkList;