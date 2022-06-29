import db from '~/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import PostVideo from './Postvideo';
import { useMemo } from 'react';

function Post() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'videos'), (snapshot) =>
            setVideos(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            ),
        );
    }, []);
    console.log(collection);
    return (
        <div id="focus" tabIndex="1">
            {videos.map((video) => (
                <PostVideo key={video.id} data={video} />
            ))}
        </div>
    );
}

export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState();
    const callbackFunction = (entries) => {
        const [entry] = entries; //const entry = entries[0]
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisibile;
};

export default Post;
