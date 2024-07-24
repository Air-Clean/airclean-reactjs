import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {callDetailRepairAPI} from '../../../../apis/ReportAPICalls';
import './BranchSalesDetail.css';

function RepairDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const repairDetail = useSelector(state => state.detailRepairReducer);

  useEffect(() => {
    dispatch(callDetailRepairAPI({
        repairReportCode: params.repairReportCode
    }));
  }, [dispatch, params.repairReportCode]);

  console.log('여까지 왔어?')
  return (
    <div className="branchDetail_menu1_layout">
      <div className="branchDetail_flex_wrap">
        <div className="details-container">
          <h1 className="title">시설물수리보고서 상세보기</h1>
          <table className="details-table">
            <thead>
              <tr>
                <th>양식명</th>
                <td colSpan="2">{repairDetail.repairReportCode}</td>
                <th>지점명</th>
                <td colSpan="2">{repairDetail.branchCode}</td>
              </tr>
              <tr>
                <th>지점장명</th>
                <td></td>
                <th>제출일</th>
                <td colSpan="3">{new Date(repairDetail.repairSubmissionDate).toLocaleDateString()}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan="8" className="vertical-header">내용</th>
                <th className="header">종류</th>
                <td colSpan="4">{repairDetail.facilityCode}</td>
              </tr>
              <tr>
                <th className="header">수리 시설물 갯수</th>
                <td colSpan="4">{repairDetail.facilityCount}</td>
              </tr>
              <tr>
                <th className="header">내용</th>
                <td colSpan="4">{repairDetail.repairContent}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    
  );
}

console.log('여기는 왔니...?')
export default RepairDetail;