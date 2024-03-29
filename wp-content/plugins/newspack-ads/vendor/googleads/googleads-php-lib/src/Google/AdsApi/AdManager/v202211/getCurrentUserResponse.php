<?php

namespace Google\AdsApi\AdManager\v202211;


/**
 * This file was generated from WSDL. DO NOT EDIT.
 */
class getCurrentUserResponse
{

    /**
     * @var \Google\AdsApi\AdManager\v202211\User $rval
     */
    protected $rval = null;

    /**
     * @param \Google\AdsApi\AdManager\v202211\User $rval
     */
    public function __construct($rval = null)
    {
      $this->rval = $rval;
    }

    /**
     * @return \Google\AdsApi\AdManager\v202211\User
     */
    public function getRval()
    {
      return $this->rval;
    }

    /**
     * @param \Google\AdsApi\AdManager\v202211\User $rval
     * @return \Google\AdsApi\AdManager\v202211\getCurrentUserResponse
     */
    public function setRval($rval)
    {
      $this->rval = $rval;
      return $this;
    }

}
