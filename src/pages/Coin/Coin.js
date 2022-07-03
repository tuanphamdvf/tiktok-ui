import { faDongSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { CoinIcon, CoinIconSmall } from '~/components/Icon/icon';
import Styles from './Coin.module.scss';

function Coin() {
    const cx = classNames.bind(Styles);

    return (
        <div className={cx('wrapperbox')}>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('title')}>
                        <div className={cx('left-title')}> Get Coins </div>
                        <div className={cx('right-title')}>View transation history </div>
                    </div>
                    <div className={cx('title-buy')}>
                        <div>
                            <img
                                className={cx('avatar')}
                                alt="avtar"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeeVu5CWReDBpxNGN9QHVsVT6l33OLK4mIfcy6L-obDRXBxgGiSu3w44JIfj-MU9eu3Y&usqp=CAU"
                            ></img>
                        </div>
                        <div className={cx('wrappercoin')}>
                            <div className={cx('name')}>duytuan</div>
                            <div className={cx('descript')}>
                                <div>{<CoinIconSmall />}</div>
                                <div className={cx('iconcurrent')}>0</div>
                            </div>
                        </div>
                        <div className={cx('coincurrent')}>
                            <div className={cx('current-content1')}>From LIVE gifts: $0.00 (0 )</div>
                            <div className={cx('current-content2')}>Exchange earnings to coins</div>
                        </div>
                    </div>

                    <div className={cx('buycoin')}>
                        <div className={cx('titlebuycoin')}>
                            <span>Buy coins: </span>
                            <span className={cx('titlebuycoin-red')}> Save up to 24% compared to in-app purchase</span>
                        </div>
                        <div className={cx('buttoncoin')}>
                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>70</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>
                                                <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>{' '}
                                            </span>
                                            19,100
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>350</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>
                                                <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>{' '}
                                            </span>
                                            95,500
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>700</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>
                                                <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>{' '}
                                            </span>
                                            191,100
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>1400</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>
                                                <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>{' '}
                                            </span>
                                            382,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>3,500</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>
                                                <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>{' '}
                                            </span>
                                            955,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>7,000</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>
                                                <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>{' '}
                                            </span>
                                            1,910,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>17,500</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>
                                                <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>{' '}
                                            </span>
                                            4,77,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('fixcoin')}>
                                <div className={cx('number-coin')}>
                                    <div className={cx('wrapper-coin')}>
                                        <div className={cx('rowcoin')}>
                                            <div className={cx('iconcoin')}>{<CoinIcon />}</div>
                                            <div className={cx('numcoin')}>Customer</div>
                                        </div>
                                        <div className={cx('vnd')}>
                                            <span className={cx('iconvnd')}>Large amount supported</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={cx('title-footer')}>
                            <div>Payment method</div>
                            <div> </div>
                        </div>

                        <div className={cx('img-pay')}></div>
                    </div>
                    <div className={cx('footer')}>
                        <div className={cx('total')}>
                            <div className={cx('total-coin')}>Total: </div>
                            <div className={cx('number-totalcoin')}>
                                <div className={cx('iconvnd')}>
                                    {' '}
                                    <FontAwesomeIcon icon={faDongSign}></FontAwesomeIcon>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('button')}>
                        <Button primary>Buy now</Button>{' '}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Coin;
