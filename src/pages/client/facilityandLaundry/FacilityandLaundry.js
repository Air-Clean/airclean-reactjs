/*
    첫번재 메뉴 페이지 입니다.
    작성일자 6월 28일
*/
import './FacilityandLaundry.css';


function FacilityandLaundry() {

    return (
        <>
            <div className="menu3_layout" style={{ height: 'calc(100vh - 130px)' }}>
                
                <div className='flex2_wrap'>
                        {/* 컴포넌트 위치 */}
                        <div style={{display:'flex', justifyContent:'center', width:'100%', marginTop:'40px'}}>
                            <div style={{width:'60%', height: '30vh', backgroundColor:'lightgray'}}>
                                123
                            </div>
                        </div>

                        <div style={{display:'flex', justifyContent:'center', width:'100%', paddingTop:'40px'}}>
                            <div style={{width:'60%', height: '45vh', backgroundColor:'lightgray'}}>
                                123
                            </div>
                        </div>

                </div>
                
            </div>
        </>
    );

}

export default FacilityandLaundry;
