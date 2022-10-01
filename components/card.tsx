import React, { useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import { Card } from 'antd';
import { Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCastCrew } from '../pages/api/hello';

const { Meta } = Card;

export default function Cards() {
  let count: any = 0;
  const dispatch = useDispatch();
  useEffect(() => {
    MovieCastCrew(dispatch, 337404);
  }, []);

  const moviesCastCrew: any = useSelector((state: any) => state.singleMovieCastCrew.singleMovieCastCrew);
  console.log('moviesCastCrew =>', moviesCastCrew);
  let path = '';

  return (
    <div style={{ padding: 20 }} className='row container'>
      {moviesCastCrew ? (
        moviesCastCrew.slice(0, 10).map((val: any) => {
          count++;
          if (val.profile_path === null) {
            path = ``;
            return <div></div>;
          } else {
            path = `https://image.tmdb.org/t/p/original/${val.profile_path}`;
          }
          return (
            <div key={val.id} className='col-sm-4 col-lg-2 col-md-3'>
              <div style={{ color: '#ffff', padding: 20 }}>
                <MDBCard className='mdb_card_main' style={{ width: '11rem' }}>
                  <MDBCardImage className='mdb_card_image' src={path} alt='...' position='top' />
                  <MDBCardBody>
                    <MDBCardText className='original_name'>{val.original_name}</MDBCardText>
                    <MDBCardText>{val.character}</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
