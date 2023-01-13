import React, { useState } from 'react';

import Collapsible from 'react-collapsible';
import CommentIcon from '@mui/icons-material/Comment';
import { CommentType } from '../../../../../services/connections';
import { InputText } from '../../Post/Tabs/TextTab/InputText';
import { PrimaryCard } from '../../../../PrimaryCard';
import SendIcon from '@mui/icons-material/Send';

export type CommentProps = {
  className?: string;
};
export const Comment = ({ className }: CommentProps) => {
  const [isExpanded, setExpanded] = useState(false);

  const [dummyContent, setDummyContent] = useState<CommentType>({
    id: 0,
    user: 'Frank',
    content: 'some dummy content',
    upVotes: 10,
  });
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDummyContent(prev => ({ ...prev, content: event.target.value }));
  };

  return (
    <Collapsible
      className={className}
      overflowWhenOpen="visible"
      onOpen={() => setExpanded(true)}
      onClose={() => setExpanded(false)}
      trigger={
        <PrimaryCard
          className="d-flex justify-content-center p-1 "
          style={{
            maxWidth: '93%',
          }}
        >
          <CommentIcon
            style={{
              fill: isExpanded ? 'gray' : '#43bbff',
            }}
          />
        </PrimaryCard>
      }
      transitionTime={150}
    >
      <br />
      <PrimaryCard
        style={{
          width: '100% !important',
          maxWidth: '93%',
        }}
        className="d-flex justify-content-center p-3"
      >
        <InputText
          changeHandler={changeHandler}
          value={dummyContent.content}
          rows={7}
          style={{ width: '100% !important' }}
        />
        <SendIcon style={{ cursor: 'pointer' }} />
      </PrimaryCard>
    </Collapsible>
  );
};